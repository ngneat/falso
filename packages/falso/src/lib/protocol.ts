import { FakeOptions, fake } from './core/core';
import { data as protocol } from './protocol.json';
import { data as protocolFull } from './protocol-full.json';

interface ProtocolOptions extends FakeOptions {
  fullName?: boolean;
}

/**
 * Generate a random protocol.
 *
 * @category internet
 *
 * @example
 *
 * randProtocol()
 *
 * @example
 *
 * randProtocol({ length: 10 })
 *
 * @example
 *
 * randProtocol({ fullName: true })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'https'
 * 'http'
 * 'tcp'
 */

export function randProtocol<Options extends ProtocolOptions = never>(
  options?: Options
) {
  return fake(options?.fullName ? protocolFull : protocol, options);
}
