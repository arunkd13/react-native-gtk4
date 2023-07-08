import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class LevelBar extends Widget {
  createNode(container: Container) {
    return new Gtk.LevelBar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "inverted":
        this.node.setInverted(newValue)
        break
      case "maxValue":
        this.node.setMaxValue(newValue)
        break
      case "minValue":
        this.node.setMinValue(newValue)
        break
      case "mode":
        this.node.setMode(newValue)
        break
      case "value":
        this.node.setValue(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onOffsetChanged":
        if (oldValue) {
          this.node.off("offset-changed", oldValue)
        }
        if (newValue) {
          this.node.on("offset-changed", newValue)
        }
        break
      default:
        break
    }
  }
}