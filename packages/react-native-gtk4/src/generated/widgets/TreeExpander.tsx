import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class TreeExpander<
  T extends Gtk.TreeExpander = Gtk.TreeExpander,
> extends Widget<T> {
  createNode() {
    return new Gtk.TreeExpander({}) as T
  }
  appendChild(child: Widget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: Widget, beforeChild: Widget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "hideExpander":
        this.node.setHideExpander(newValue)
        break
      case "indentForDepth":
        this.node.setIndentForDepth(newValue)
        break
      case "indentForIcon":
        this.node.setIndentForIcon(newValue)
        break
      case "listRow":
        this.node.setListRow(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyHideExpander":
        this.setHandler("notify::hide-expander", newValue)
        break
      case "onNotifyIndentForDepth":
        this.setHandler("notify::indent-for-depth", newValue)
        break
      case "onNotifyIndentForIcon":
        this.setHandler("notify::indent-for-icon", newValue)
        break
      case "onNotifyItem":
        this.setHandler("notify::item", newValue)
        break
      case "onNotifyListRow":
        this.setHandler("notify::list-row", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
