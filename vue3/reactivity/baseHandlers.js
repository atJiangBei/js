
import { TrackOpTypes, TriggerOpTypes } from './operations'
import { reactive,toRaw } from './reactive.js'
import { track } from './effect.js'
const get = createGetter()
const hasOwn = (target, key)=>Object.hasOwnProperty(target, key)


function createGetter(isReadonly = false, shallow = false) {
  return function get(target, key, receiver) {
	
	const res = Reflect.get(target, key, receiver)
	
	
    if (!isReadonly) {
      track(target, TrackOpTypes.GET, key)
    }


    if (typeof res === 'object') {
      return reactive(res)
    }

    return res
  }
}

const set = createSetter()

function createSetter(shallow = false) {
  return function set(
    target,
    key,
    value,
    receiver
  ) {
    let oldValue = target[key]
    if (!shallow) {
      value = toRaw(value)
      oldValue = toRaw(oldValue)
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value
        return true
      }
    } else {
      // in shallow mode, objects are set as-is regardless of reactive or not
    }

    const hadKey =
      isArray(target) ? Number(key) < target.length : hasOwn(target, key)
    const result = Reflect.set(target, key, value, receiver)
    // don't trigger if target is something up in the prototype chain of original
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
}


export const mutableHandlers = {
	set,
	get,
}