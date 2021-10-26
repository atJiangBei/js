import { mutableHandlers } from './baseHandlers'

export const ReactiveFlags {
  SKIP : '__v_skip',
  IS_REACTIVE : '__v_isReactive',
  IS_READONLY : '__v_isReadonly',
  RAW : '__v_raw'
}


export const reactiveMap = new WeakMap()

export const reactive = (target)=>{
	return createReactiveObject(target,false,mutableHandlers,)
}


function createReactiveObject(
  target,
  isReadonly,
  baseHandlers,
  proxyMap
) {

  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  const proxy = new Proxy(
    target,
    baseHandlers
  )
  proxyMap.set(target, proxy)
  return proxy
}


export function toRaw(observed){
  const raw = observed[ReactiveFlags.RAW]
  return raw ? toRaw(raw) : observed
}