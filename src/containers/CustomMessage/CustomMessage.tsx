import React, {useRef} from "react";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

import './style.scss';
import Button from "../../components/Form/Button";

export default function CustomMessage() {
    const dragDropContext = useRef(null);

    const getItemStyle = (isDragging: boolean, draggableStyle: any) => {
        const trn = draggableStyle.transform?.match(/\((.*?)\)/)[1]?.split(',')?.map((pos: any) => pos.replace('px', ''));
        let transform;
        const {offsetWidth} = dragDropContext?.current || {};
        const pos = dragDropContext?.current?.getBoundingClientRect()
        const top = pos?.top
        const bottom = offsetWidth - draggableStyle.top;
        if (trn?.length === 2) {
            let Y = trn[1];

            if (Y < top - draggableStyle.top) {
                Y = top - draggableStyle.top;
            } else if (Y > bottom) {
                Y = bottom;
            }

            transform = `translate(0px, ${Y}px)`;
        } else {
            transform = draggableStyle.transform;
        }
        return {
            ...draggableStyle,
            position: 'static',
            userSelect: 'none',
            transform
        } as React.CSSProperties
    };

    const dragEnd = (...args: any) => {
        console.log(args)
    }

    const onDragUpdate = (value: any) => {
        // console.log('Update')
        // console.log(value)
    }

    return <div id='customMessage'>
        <div ref={dragDropContext} id='dragDropContext'>
            <DragDropContext
                onDragUpdate={onDragUpdate}
                onDragEnd={dragEnd}>
                <Droppable droppableId='message'>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} className='messageDroppable'>
                            <Draggable draggableId={'1id'} index={1}>
                                {(provided, snapshot) => {
                                    return <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        {<div className='draggableElmt'>ABOBA</div>}
                                    </div>
                                }}
                            </Draggable>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='stack'>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} className='stackDroppable'>
                            <Draggable draggableId={'2id'} index={1}>
                                {(provided, snapshot) => {
                                    return <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        {<div className='draggableElmt'>ABOBA</div>}
                                    </div>
                                }}
                            </Draggable>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
        <div>
            <Button text={'Send'}/>
        </div>
    </div>
}
