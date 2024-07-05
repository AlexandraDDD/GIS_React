import React from 'react'
import { CommandBar } from '../components/CommandBar'
import { Properties } from '../components/Properties'
import { MapBox } from '../components/MapBox'
import Aspects from '../components/main/aspects'

function Main() {
  return (
    <div className="w-100 h-100 d-flex flex-column overflow-hidden">
        <Aspects></Aspects>
    <div className="flex-grow-1 d-flex overflow-hidden">
        <div className="h-100 flex-grow-1">
            <MapBox />
        </div>
    </div>
</div>
  )
}

export default Main