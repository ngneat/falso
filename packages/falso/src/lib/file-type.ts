import { rand } from './core';

export function fileType() {
  return rand([
    'model',
    'x-conference',
    'x-shader',
    'video',
    'application',
    'message',
    'multipart',
    'font',
    'audio',
    'image',
    'chemical',
    'text',
  ]);
}
