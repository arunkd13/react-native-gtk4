import { Gtk } from "../../index.js"
import Popover from "./Popover.js"

export default class PopoverMenu<
  T extends Gtk.PopoverMenu = Gtk.PopoverMenu,
> extends Popover<T> {
  createNode() {
    return new Gtk.PopoverMenu({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
      case "visibleSubmenu":
        this.node.visibleSubmenu = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyMenuModel":
        this.setHandler("notify::menu-model", newValue)
        break
      case "onNotifyVisibleSubmenu":
        this.setHandler("notify::visible-submenu", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
