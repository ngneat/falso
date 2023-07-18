'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var devkit_1 = require('@nx/devkit');
var ts_morph_1 = require('ts-morph');
var glob_1 = require('glob');
var path_1 = require('path');
var fs_1 = require('fs');
var project = new ts_morph_1.Project({
  manipulationSettings: {
    quoteKind: ts_morph_1.QuoteKind.Single,
  },
  compilerOptions: {
    target: ts_morph_1.ScriptTarget.ES2015,
  },
});
function manipulator(options, context) {
  return __awaiter(this, void 0, void 0, function () {
    var funcsPaths,
      _i,
      funcsPaths_1,
      path,
      baseName,
      className,
      funcName,
      content,
      sourceFile,
      decl;
    return __generator(this, function (_a) {
      funcsPaths = (0, glob_1.sync)('packages/falso/src/lib/*.ts');
      for (_i = 0, funcsPaths_1 = funcsPaths; _i < funcsPaths_1.length; _i++) {
        path = funcsPaths_1[_i];
        baseName = (0, path_1.basename)(path).replace('.ts', '');
        className = (0, devkit_1.names)(baseName).className;
        funcName = 'rand' + className;
        content = (0, fs_1.readFileSync)(path).toString();
        sourceFile = project.createSourceFile('temp.ts', content, {
          overwrite: true,
        });
        decl = sourceFile.getFunctions().find(function (f) {
          return f.getName().startsWith('rand');
        });
        // if (!decl) {
        //   console.log(funcName);
        // }
        decl.getTypeParameters().forEach(function (c) {
          var split = c.getText().split('extends');
          c.replaceWithText(
            c.getText() + ' = ' + split[split.length - 1].trim()
          );
        });
        // Manipulate the function
        sourceFile.formatText({ tabSize: 2 });
        (0, fs_1.writeFileSync)(path, sourceFile.getText(), {
          encoding: 'utf8',
        });
      }
      return [2 /*return*/, { success: true }];
    });
  });
}
exports['default'] = manipulator;
