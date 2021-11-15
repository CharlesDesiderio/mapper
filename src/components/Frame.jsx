import Draggable from 'react-draggable'

const Frame = (props) => {
  return props.drag ? (
    <Draggable>
      <div>
        {props.item.name}
      </div>
    </Draggable>
  ) : (
    <div>
    {props.item.name}
  </div>
  )
}

export default Frame