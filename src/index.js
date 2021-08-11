import React, {useState} from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './components/ListItem'
import Input from './components/Input'
import { complete, submit } from './reducers/todos'

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  }
});

// este submit es el que viene del mapDispatchToProps
const App = ({ data, complete, submit }) => {
  const [value, setValue] = useState('')

  const handleChange = (val) => {
    console.log(val)
    setValue(val)
  }

  return (
    <View style={styles.container}>
      <Input onChange={handleChange} value={value}/> 
      <FlatList 
        style={styles.list}
        data={data}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => 
          <ListItem 
            completed={item.completed} 
            onPress={ () =>complete(item.id) } 
            desc={item.desc} 
          />
        }
      />
    </View>
  )
}

// funcion que recibetodo el estado de la aplicacion
// retorna los valores que quieremos que aparezcan en los props del componente
const mapStateToProps = state => {
  return {data: state.todos}
}

// objeto contiene las propiedades que se quiere en el componente de App
// este objeto se lo manda con sus argumentos al componente
const mapDispatchToProps = dispatch => ({
  complete: (id) => dispatch(complete(id)), // complete es un action Creator
  submit: (val) => dispatch(submit(val)),
})

// primera vez que llamamos a connect le pasamos mapStateToProps
// la segunda vez que la llamamos le pasamos el componente que queremos conectar
export default connect(mapStateToProps, mapDispatchToProps)(App)

