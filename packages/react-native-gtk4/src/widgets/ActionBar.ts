import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ActionBar extends Widget {
  createNode(container: Container) {
    return new Gtk.ActionBar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "revealed":
        this.node.setRevealed(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}