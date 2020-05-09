if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';
      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      let to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (let nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

// 保护回调
let SHBridge_cb = {
  id: 0,
  cb: {},
  cb_s: {}
};

// 回调分发
let obj = {};

class SHBridge {
  constructor(conf) {
    // SHBridge信息
    Object.assign(this, conf);

    this.init();
  }

  init() {
    console.warn(`SHBridge文档地址：https://gopub.tt.cn:5500/，host绑定的ip地址请联系相关部门。`);
    // UA中含有“_SHBridge_android”关键词时，有可能对象“_SHBridge”任然不存在，比如疯狂猜成语APP，这里加一个错误捕获，防止因错误造成js阻塞。
    try {
      this._call({
        method: 'bridgeOk'
      });
    } catch (error) {
      console.error(error);
    }
  }

  // 与native通信
  _call(args, sync) {
    let message;
    let UA = window.navigator.userAgent;

    args.method += sync ? 'Sync' : 'Async';

    let IOSWebview = UA.indexOf('_SHBridge_ios') >= 0;
    let ANDWebview = UA.indexOf('_SHBridge_android') >= 0;

    if (!ANDWebview && !IOSWebview) {
      console.error(`[error]: ${this.messages.notApp}`);
    } else {
      if (ANDWebview) {
        // 未做容错处理（_SHBridge）
        message = JSON.parse(_SHBridge.postMessage(JSON.stringify(args)));
      } else {
        message = JSON.parse(prompt(args.method, JSON.stringify(args)));
      }
    }
    return message;
  }

  // 从客户端接受信息
  handle(res) {
    if (typeof res === 'object' && res !== null && res.callback) {
      SHBridge_cb.cb[res.callback] && SHBridge_cb.cb[res.callback](res);
    }
    // delete SHBridge_cb.cb[res.callback];
  }

  // 从客户端接受错误处理信息
  handleErr(res) {
    if (typeof res === 'object' && res !== null && res.failCallback) {
      SHBridge_cb.cb[res.failCallback] && SHBridge_cb.cb[res.failCallback](res);
    }
    // delete SHBridge_cb.cb[res.failCallback];
  }

  // 异步调用native功能
  call(api, args, cb, fcb) {
    if ((arguments.length === 2 || arguments.length === 3) && typeof args === 'function') {
      cb && (fcb = cb);
      cb = args;
      args = {};
    }
    !cb && (cb = () => {});
    !fcb && (fcb = () => {});
    if (!api) console.error(`[error]: ${this.messages.neeMethod}`);
    if (
      (api && typeof api !== 'string') ||
      (args && typeof args !== 'object') ||
      (cb && typeof cb !== 'function') ||
      (fcb && typeof fcb !== 'function')
    ) {
      console.error(`[error]: ${this.messages.paramsErr}`);
    }

    let callback = `${api}_${SHBridge_cb.id++}`;
    let failCallback = `${api}_${SHBridge_cb.id++}_fail`;

    args = {
      method: api,
      params: args,
      callback,
      failCallback
    };

    SHBridge_cb.cb[callback] = cb;
    SHBridge_cb.cb[failCallback] = fcb;

    return this._call(args, false);
  }

  // 同步调用native功能
  callSync(api, args) {
    if (!api) console.error(`[error]: ${this.messages.neeMethod}`);

    args = {
      method: api,
      params: args
    };

    return this._call(args, true);
  }

  // 方法存在性检测
  has(method, isSync) {
    let message;
    let UA = window.navigator.userAgent;

    let IOSWebview = UA.indexOf('_SHBridge_ios') >= 0;
    let ANDWebview = UA.indexOf('_SHBridge_android') >= 0;

    method = isSync ? method + 'Sync' : method + 'Async';

    if (!ANDWebview && !IOSWebview) {
      console.error(`[error]: ${this.messages.notApp}`);
    } else {
      if (ANDWebview) {
        message = JSON.parse(
          _SHBridge.postMessage(
            JSON.stringify({
              method: 'SHBridge.hasNativeMethod',
              target: method
            })
          )
        );
      } else {
        message = prompt(
          'SHBridge.hasNativeMethod',
          JSON.stringify({
            method: 'SHBridge.hasNativeMethod',
            target: method
          })
        );
      }
    }
    return message;
  }

  // 注册h5方法供app调用
  register(msg, cb, fcb) {
    if (
      !msg ||
      typeof msg !== 'string' ||
      !cb ||
      typeof cb !== 'function' ||
      (fcb && typeof fcb !== 'function')
    ) {
      console.error(`[error]: ${this.messages.paramsErr}`);
    }

    if (obj[msg] === undefined) {
      obj[msg] = {};
    }

    if (obj[msg].cb === undefined) {
      obj[msg].cb = {};
    }
    if (obj[msg].fcb === undefined) {
      obj[msg].fcb = {};
    }

    let callback = `${msg}_${SHBridge_cb.id++}`;
    let failCallback = `${msg}_${SHBridge_cb.id++}_fail`;

    obj[msg].cb[callback] = cb;
    obj[msg].fcb[callback] = fcb;

    SHBridge_cb.cb[callback] = appinfo => {
      for (let cbkey in obj[msg].cb) {
        obj[msg].cb[cbkey](appinfo);
      }
    };

    SHBridge_cb.cb[failCallback] = appinfo => {
      for (let fcbkey in obj[msg].fcb) {
        obj[msg].cb[fcbkey](appinfo);
      }
    };

    this._call({
      method: 'SHBridge.registerMethod',
      params: {
        msg
      },
      callback,
      failCallback
    });
  }

  //app传参
  result(data, cbname) {
    SHBridge_cb[cbname.indexOf('Sync') > -1 ? 'cb_s' : 'cb'][cbname](data);
  }
}

let instance = new SHBridge(config);

export default instance;