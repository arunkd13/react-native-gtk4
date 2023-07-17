import Overlay from "../generated/widgets/Overlay.js"
import Widget from "../widget.js"

const parent = {
  appendChild: Widget.prototype.appendChild,
  removeChild: Widget.prototype.removeChild,
  insertBefore: Widget.prototype.insertBefore,
}

Overlay.prototype.appendChild = function (this: Overlay, child: Widget) {
  parent.appendChild.call(this, child)
  this.node.addOverlay(child.node)
}

Overlay.prototype.removeChild = function (this: Overlay, child: Widget) {
  parent.removeChild.call(this, child)
  this.node.removeOverlay(child.node)
}

Overlay.prototype.insertBefore = function (
  this: Overlay,
  child: Widget,
  beforeChild: Widget
) {
  for (const child of this.children) {
    this.node.removeOverlay(child.node)
  }

  parent.insertBefore.call(this, child, beforeChild)

  for (const child of this.children) {
    this.node.addOverlay(child.node)
  }
}
