"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var devkit_1 = require("@nrwl/devkit");
var glob_1 = require("glob");
var fs_1 = require("fs");
var path = require("path");
/**
 * Build all locales.
 *
 * @param options
 * @param context
 */
function buildLocales(options, context) {
    return __awaiter(this, void 0, void 0, function () {
        var localeBuildConfigs, result, _i, result_1, res;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    localeBuildConfigs = createLocaleBuildConfigs(options);
                    if (localeBuildConfigs.length > 0) {
                        console.info("Build locales for " + localeBuildConfigs
                            .map(function (value) { return value.language; })
                            .join(', ') + ".");
                    }
                    else {
                        console.info("No locales found in \"" + options.localesSourcePath + "\" ...");
                    }
                    return [4 /*yield*/, Promise.all(localeBuildConfigs.map(function (buildConfig) { return __awaiter(_this, void 0, void 0, function () {
                            var buildResult;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        setupLocaleBuild(buildConfig);
                                        return [4 /*yield*/, buildLocale(buildConfig, context)];
                                    case 1:
                                        buildResult = _a.sent();
                                        tearDownLocaleBuild(buildConfig);
                                        if (buildResult.success) {
                                            cleanupBuildArtifacts(buildConfig);
                                        }
                                        return [2 /*return*/, buildResult];
                                }
                            });
                        }); }))];
                case 1:
                    result = _a.sent();
                    for (_i = 0, result_1 = result; _i < result_1.length; _i++) {
                        res = result_1[_i];
                        if (!res.success)
                            return [2 /*return*/, res];
                    }
                    return [2 /*return*/, { success: true }];
            }
        });
    });
}
exports["default"] = buildLocales;
/**
 * Given the options, create build configs for all existing locales.
 *
 * @param localesOutputPath
 * @param localesSourcePath
 * @param falsoSourcePath
 */
function createLocaleBuildConfigs(_a) {
    var localesOutputPath = _a.localesOutputPath, localesSourcePath = _a.localesSourcePath, falsoSourcePath = _a.falsoSourcePath;
    return (0, glob_1.sync)(localesSourcePath + "/*/index.ts").map(function (entryFile) {
        var language = path.dirname(entryFile).split(path.sep).pop();
        return {
            language: language,
            outputPath: localesOutputPath + "/" + language,
            entryFile: falsoSourcePath + "/index_" + language + ".ts",
            tsConfig: localesSourcePath + "/" + language + "/tsconfig.json"
        };
    });
}
/**
 * Build secondary entrypoint, by running the original build target with custom
 * build configuration.
 *
 * @param buildConfig
 * @param context
 */
function buildLocale(buildConfig, context) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var buildResults, buildResults_1, buildResults_1_1, buildResult, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, devkit_1.runExecutor)({ project: 'falso', target: 'build' }, __assign(__assign({}, buildConfig), { assets: [] }), context)];
                case 1:
                    buildResults = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, 8, 13]);
                    buildResults_1 = __asyncValues(buildResults);
                    _b.label = 3;
                case 3: return [4 /*yield*/, buildResults_1.next()];
                case 4:
                    if (!(buildResults_1_1 = _b.sent(), !buildResults_1_1.done)) return [3 /*break*/, 6];
                    buildResult = buildResults_1_1.value;
                    if (!buildResult.success)
                        return [2 /*return*/, buildResult];
                    _b.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _b.trys.push([8, , 11, 12]);
                    if (!(buildResults_1_1 && !buildResults_1_1.done && (_a = buildResults_1["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(buildResults_1)];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/, { success: true }];
            }
        });
    });
}
/**
 * Create necessary file for a proper build of the secondary entry point.
 *
 * @param buildConfig
 */
function setupLocaleBuild(buildConfig) {
    (0, fs_1.writeFileSync)(buildConfig.entryFile, "export * from './lib/locales/" + buildConfig.language + "';");
    (0, fs_1.writeFileSync)(buildConfig.tsConfig, "{\n  \"extends\": \"../../../../tsconfig.json\",\n  \"compilerOptions\": {\n    \"outDir\": \"../../../../../../dist/out-tsc\",\n    \"declaration\": true,\n    \"types\": []\n  },\n  \"include\": [\"**/*.ts\"],\n  \"exclude\": [\"**/*.spec.ts\"]\n}\n");
}
/**
 * Remove files, that are created for a proper build of the secondary entry
 * points.
 *
 * @param buildConfig
 */
function tearDownLocaleBuild(buildConfig) {
    (0, fs_1.rmSync)(buildConfig.tsConfig);
    (0, fs_1.rmSync)(buildConfig.entryFile);
}
/**
 * Rename index[_language].* files to index.* files and create a minimal
 * package.json file for a secondary entrypoint.
 *
 * @param buildConfig
 */
function cleanupBuildArtifacts(buildConfig) {
    (0, glob_1.sync)(buildConfig.outputPath + "/index_*").forEach(function (indexFilePath) {
        return (0, fs_1.renameSync)(indexFilePath, indexFilePath.replace(/_[a-z]+./g, '.'));
    });
    (0, fs_1.writeFileSync)(buildConfig.outputPath + "/package.json", "{\n  \"main\": \"./index.cjs.js\",\n  \"module\": \"./index.esm.js\",\n  \"typings\": \"./index.d.ts\"\n}");
}
