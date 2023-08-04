import Gtk from "@girs/node-gtk-4.0"
import { createContainerForRootNode } from "./container.js"
import { createReconciler } from "./reconciler.js"
import "./generated/jsx.js"
import "./overrides.js"

export { default as Gtk } from "@girs/node-gtk-4.0"
export { default as Gdk } from "@girs/node-gdk-4.0"
export { default as Gio } from "@girs/node-gio-2.0"
export { default as GLib } from "@girs/node-glib-2.0"
export { default as GObject } from "@girs/node-gobject-2.0"
export { default as Pango } from "@girs/node-pango-1.0"
export { createContainerForRootNode, createReconciler }
export * from "./generated/intrinsics.js"
export * from "./hooks.js"
export * from "./portal.js"

export {
  AboutDialog,
  ActionBar,
  ApplicationWindow,
  CenterBox,
  CheckButton,
  ColorDialogButton,
  DropDown,
  EmojiChooser,
  Expander,
  FontDialogButton,
  Frame,
  Grid,
  HeaderBar,
  LevelBar,
  MenuButton,
  Notebook,
  Overlay,
  PageSetupUnixDialog,
  Paned,
  Popover,
  PopoverMenu,
  PopoverMenuBar,
  PrintUnixDialog,
  Scale,
  Stack,
} from "./components.js"

export default function render(
  element: React.ReactNode,
  application: Gtk.Application
) {
  createContainerForRootNode(application).render(element)
}
