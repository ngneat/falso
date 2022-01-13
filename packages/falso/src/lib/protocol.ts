import { FakeOptions, fake } from './core';
import { data } from './protocol.json';

// TODO rename? webProtocol? applicationLayerProtocol
// add more protocols https://en.wikipedia.org/wiki/Application_layer#Protocols
export function protocol<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
