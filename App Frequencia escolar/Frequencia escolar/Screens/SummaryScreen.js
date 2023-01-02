
import * as React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import db from '../config'


var present = [];
var absent = [];
var dataread;

export default class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      present: [],
      absent: []
    }
  }

  read = () => {

    db.ref('class').on('value', (data) => {
      dataread = data.val();
    })

    var nd = new Date();
    var dd = nd.getDate();
    var mm = nd.getMonth() + 1;
    var yy = nd.getFullYear();
    
     if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    var today = dd + '-' + mm + '-' + yy;

    for(var i in dataread) {
      if(dataread[i][today] === "present") {
        present.push(dataread[i]);
      }
      if(dataread[i][today] === "absent") {
        absent.push(dataread[i]);
      }
    }

    console.log(today)
    present.sort((a, b) => {
      a.roll_no - b.roll_no
    })

    absent.sort((a, b) => {
      a.roll_no - b.roll_no
    })
    
    this.setState({
      present: present,
      absent: absent
    })

  }

  componentDidMount() {
    this.read();
    console.log(this.state.present)
  }

  render() {
    return(
      <View>
        <Text style={st.headerpres}>Presente</Text>
        {this.state.present.map((xyz) => (
          <Text style={st.normal}>{xyz.name}</Text>
        ))}

        <Text style={st.headerabs}>Ausente</Text>
        {this.state.absent.map((xyz) => (
          <Text style={st.normal}>{xyz.name}</Text>
        ))}
      </View>
    )
  }
}


var st = StyleSheet.create({
  headerpres : {
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 30,
    backgroundColor: 'green',    
  },

  headerabs : {
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    marginTop:20,
    marginBottom: 30,
    backgroundColor: 'red',    
  },

  normal: {
    textAlign:'center',
    fontSize:20,
    fontFamily:"cursive",
    fontWeight:"bold"
  }
})