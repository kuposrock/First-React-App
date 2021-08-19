import React from 'react';
import todo from './Todo';

export default function TodoList({todoList}) {
    return (
        <div>
            {todoList.length}
        </div>
    )
}
