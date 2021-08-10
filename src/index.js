import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './components/ListItem'
import { complete } from './reducers/todos'

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  }
});

const App = ({ data, complete }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={data}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => 
          <ListItem completed={item.completed} onPress={ () =>complete(item.id) } desc={item.desc} />}
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
const mapDispatchToProps = dispatch => ({
  complete: (id) => dispatch(complete(id)) // complete es un action Creator
})

// primera vez que llamamos a connect le pasamos mapStateToProps
// la segunda vez que la llamamos le pasamos el componente que queremos conectar
export default connect(mapStateToProps, mapDispatchToProps)(App)

