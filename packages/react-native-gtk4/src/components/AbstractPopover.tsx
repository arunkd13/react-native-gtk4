import React, { useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { createPortal } from "../portal.js"
import { useForwardedRef } from "../utils.js"

type ElementType = "Popover" | "PopoverMenu" | "EmojiChooser"

export type AbstractPopoverProps<T extends ElementType> = Omit<
  JSX.IntrinsicElements[T],
  "children"
> & {
  elementType: T
  children?: (React.ReactElement & React.RefAttributes<Gtk.Widget>) | null
  content?: (React.ReactElement & React.RefAttributes<Gtk.Widget>) | null
  open?: boolean
}

export default forwardRef<Gtk.Popover, AbstractPopoverProps<ElementType>>(
  function AbstractPopoverComponent(
    { content, elementType, open, children, ...props },
    ref
  ) {
    const [innerRef, setInnerRef] = useForwardedRef(ref)
    const [childRef, setChildRef] = useForwardedRef(children?.ref)
    const [contentRef, setContentRef] = useForwardedRef(content?.ref)

    useEffect(() => {
      const content = contentRef.current
      const popover = innerRef.current
      const child = childRef.current

      if (!popover || !child) {
        return
      }

      popover.unparent()
      popover.setParent(child)

      if (content) {
        content.unparent()
        popover.setChild(content)
      }
    }, [])

    useEffect(() => {
      const popover = innerRef.current

      if (!popover) {
        return
      }

      if (open) {
        popover.popup()
      } else {
        popover.popdown()
      }
    }, [open])

    return (
      <>
        {createPortal(
          <>
            {React.createElement(elementType, {
              ref: setInnerRef,
              ...props,
            })}
            {content
              ? React.cloneElement(content, {
                  ref: setContentRef,
                })
              : null}
          </>
        )}
        {children
          ? React.cloneElement(children, {
              ref: setChildRef,
            })
          : null}
      </>
    )
  }
)
