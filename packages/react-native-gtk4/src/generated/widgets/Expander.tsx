import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Expander<T extends Gtk.Expander> extends Widget<T> {
  createNode() {
    return new Gtk.Expander({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "expanded":
        this.node.setExpanded(newValue)
        break
      case "label":
        this.node.setLabel(newValue)
        break
      case "labelWidget":
        this.node.setLabelWidget(newValue)
        break
      case "resizeToplevel":
        this.node.setResizeToplevel(newValue)
        break
      case "useMarkup":
        this.node.setUseMarkup(newValue)
        break
      case "useUnderline":
        this.node.setUseUnderline(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
    }
  }
}
