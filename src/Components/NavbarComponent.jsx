import React from 'react'

export default function NavbarComponents(props) {
  props.numeroPersonas = 3
  return (
    <div>{props.numeroPersonas}</div>
  )
}
