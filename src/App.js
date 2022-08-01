import logo from './logo.svg';
import './App.css';
import Downshift from 'downshift'


const items = [
  {value: 'apple'},
  {value: 'pear'},
  {value: 'orange'},
  {value: 'grape'},
  {value: 'banana'},
]


function App() {
  return (
    <Downshift
      onStateChange={(changes, stateAndHelpers) => {
        console.log("changes", changes)
        console.log("stateAndHelpers", stateAndHelpers)
      }}
      onSelect={item => {
        console.log('item', item)
      }}
      onChange={selection =>
        alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
      }
      itemToString={item => (item ? item.value : '')}
    >
      {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          getRootProps,
        }) => (
        <div>
          <label {...getLabelProps()}>1.Please type 'a'</label>
          <div
            style={{display: 'inline-block'}}
            {...getRootProps({}, {suppressRefError: true})}
          >
            <input {...getInputProps()} />
            <div style={{padding: 50, border: '1px solid red'}}>
              <p>2. then click the button in mobile/tablet or pc (use Chrome device is ok)</p>
              <button>I want to show the menu after I click the button</button>
              <p>3. in desktop, the menu still show, but in mobile/tablet, the menu is hidden</p>
              <ul {...getMenuProps()}>
                {isOpen
                  ? items
                    .filter(item => !inputValue || item.value.includes(inputValue))
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index ? 'lightgray' : 'white',
                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                          },
                        })}
                      >
                        {item.value}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>

        </div>
      )}
    </Downshift>
  );
}

export default App;
