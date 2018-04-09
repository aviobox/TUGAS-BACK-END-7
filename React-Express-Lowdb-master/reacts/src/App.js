import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={nama:'',usia:'',pegawai:[]}
  }
  klik(){
    this.setState({
      nama: this.refs.nama.value,
      usia: this.refs.usia.value
    });
  }
  klik2(){
    var x = this.state.nama;
    var y = this.state.usia;
    axios.post('http://localhost:3500/',{
      nama : x,
      usia : y
    })
  }
  klik3(){
    axios.get('http://localhost:3500/')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        pegawai: ambilData.data,
      })
    })
  }

  render() {
    const data = this.state.pegawai.map((item, index)=>{
      var nama = [item.nama]
      var usia = [item.usia]
      return <tr key={index}><td>{nama}</td><td>{usia}</td></tr>;
    })
    return (
      <div>
      <center>
      <h1>DATA PEGAWAI</h1>
      <div className="row">
              <input className="form-control" ref="nama" type="text" placeholder="Masukkan Nama" onInput={()=>{this.klik();}}/><br/>
              <input className="form-control" ref="usia" type="number" placeholder="Masukkan Usia" onInput={()=>{this.klik();}}/><br/>
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik2();}}>POST</button>&nbsp;&nbsp;
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik3();}}>GET</button>
            </div>
      <br/>
      <tr className="head">
            <td>Nama</td>
            <td>Usia</td>
          </tr>
      {data}
    
      </center>
      </div>
    );
  }
}

export default App;

