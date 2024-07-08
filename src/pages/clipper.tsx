import React from 'react'
import { CommandBar } from '../components/CommandBar'
import { Properties } from '../components/Properties'
import MapBox from '../components/MapBox'

function Clipper() {
  return (
    <div className="w-100 h-100 d-flex flex-column  overflow-hidden">
			<CommandBar />
			<div className="flex-grow-1 d-flex overflow-hidden">
				<div className="h-100">
					<Properties />
				</div>
				<div className="h-100 flex-grow-1">

					<MapBox points={true}/>

				</div>
			</div>
		</div>
  )
}

export default Clipper