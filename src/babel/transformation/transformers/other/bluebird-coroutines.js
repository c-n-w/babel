import remapAsyncToGenerator from "../../helpers/remap-async-to-generator";
import * as t from "../../../types";

export function manipulateOptions(opts) {
  opts.blacklist.push("regenerator");
}

export var metadata = {
  optional: true,
  dependencies: ["es7.asyncFunctions", "es6.classes"]
};

exports.Function = function (node, parent, scope, file) {
  if (!node.async || node.generator) return;

  return remapAsyncToGenerator(
    node,
    t.memberExpression(file.addImport("bluebird", null, "absolute"), t.identifier("coroutine")),
    scope
  );
};
