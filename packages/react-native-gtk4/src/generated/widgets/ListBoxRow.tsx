import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../abstract/widget.js"

export default class ListBoxRow<
  T extends Gtk.ListBoxRow = Gtk.ListBoxRow,
> extends Widget<T> {
  static createNode() {
    return new Gtk.ListBoxRow({})
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "activatable":
        if (this.node.getActivatable() !== newValue) {
          this.node.setActivatable(newValue)
        }
        break
      case "selectable":
        if (this.node.getSelectable() !== newValue) {
          this.node.setSelectable(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "actionName":
        if (this.node.getActionName() !== newValue) {
          this.node.setActionName(newValue)
        }
        break
      case "actionTarget":
        this.node.actionTarget = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onNotifyActivatable":
        this.setHandler("notify::activatable", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifySelectable":
        this.setHandler("notify::selectable", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyActionName":
        this.setHandler("notify::action-name", newValue)
        break
      case "onNotifyActionTarget":
        this.setHandler("notify::action-target", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
