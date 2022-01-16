import { FakeOptions, fake } from './core/core';
import { data } from './protocol.json';

// TODO rename? webProtocol? applicationLayerProtocol
// add more protocols https://en.wikipedia.org/wiki/Application_layer#Protocols
export function randProtocol<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
