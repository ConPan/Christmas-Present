import React from 'react';

const Header = ({setSwitcher}) => {
    

    return (
        <div>
            <button onClick={() => {setSwitcher("Forum")}}>Forum</button>
            <button onClick={() => {setSwitcher("Group")}}>Group</button>
        </div>
    )
}
export default Header;