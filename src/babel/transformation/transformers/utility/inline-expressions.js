import * as t from "../../../types";

export var metadata = {
  optional: true,
  group: "builtin-setup"
};

export function Expression(node, parent, scope) {
  var res = this.evaluate();
  if (res.confident) return t.valueToNode(res.value);
}

export function Identifier() {
  // override Expression
}
