import React from 'react';
//import PropTypes from 'prop-types';
//import styles from './CovidDetails.module.scss';

  // const CovidDetails = () => (
  //   <div className={styles.CovidDetails}>
  //     CovidDetails Component
  //   </div>
  // );
class CovidDetails extends React.Component{
  constructor(props){
    super(props);
    this.state={
      FirstName: '',
      LastName: '',
      Age: '',
      BodyTemperature: '',
      Covid_Status: '',
      // get FullName(){
      //   return this.FirstName + this.LastName
      // },
      CovidRecordList: []
    }
    this.OnSubmit = this.OnSubmit.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
    this.ManageCovidStatus = this.ManageCovidStatus.bind(this);
    this.GetAssessmentCount = this.GetAssessmentCount.bind(this);
  }
  OnSubmit(e){
    this.state.CovidRecordList.push({
      Date: new Date(),
      FullName: this.state.FirstName + this.state.LastName,
      Age: this.state.Age,
      CovidStatus: this.state.Covid_Status,
      AssessmentCount: this.GetAssessmentCount(e)
    })
    this.setState({["FirstName"] : '', ["LastName"]: ''});
    this.setState({["LastName"] : ''});
    this.setState({["Age"] : ''});
    this.setState({["BodyTemperature"] : ''});
    this.setState({["Covid_Status"] : ''});
  }

  async HandleChange(e){
    if(e.target.name === 'BodyTemperature'){
      await this.setState({[e.target.name] : e.target.value});
      this.ManageCovidStatus(e);
    }
    else{
      this.setState({[e.target.name] : e.target.value});
    }
  }

  GetAssessmentCount(e){
    var count = 1;
    this.state.CovidRecordList.forEach(x=>{if(x['FullName'] === this.state.FirstName + this.state.LastName) count++;});
    return count; 
  }

  ManageCovidStatus(e){
    if(this.state.BodyTemperature > 100){
      this.setState({["Covid_Status"] : 'Corona Go'});
    }
    else{
      this.setState({["Covid_Status"] : 'No Corona'});
    }
  }
  HandleSubmit(e){
    alert('Hello');
  }
  render(){
    return <div>
      {/* <form> */}
        <h1>{this.props.title}</h1>
        <div>
          <label>First Name:</label>
          <input type="text" className="" name="FirstName" value={this.state.FirstName} onChange={this.HandleChange}/>
        </div>
        <br />
        <div>
          <label>Last Name:</label>
          <input type="text" className="" name="LastName" value={this.state.LastName} onChange={this.HandleChange}/>
        </div>
        <br />
        <div>
          <label>Age:</label>
          <input type="number" className="" name="Age" value={this.state.Age} onChange={this.HandleChange}/>
        </div>
        <br />
        <div>
          <label>Body Temperature:</label>
          <input type="number" className="" name="BodyTemperature" value={this.state.BodyTemperature} onChange={this.HandleChange}/>
          <view>
              {this.state.BodyTemperature ? (this.state.BodyTemperature > 100 ? <label>Corona Go</label> : <label>No Corona</label>) : null}
            </view>
        </div>
        <br />
        <div>
          <label>Covid Status:
          <input type="text" disabled className="" name="Covid_Status" value={this.state.Covid_Status} />
          </label>
        </div>
        <div><button onClick={this.OnSubmit}>Submit</button></div>
        
      {/* </form> */}
      {/* for (let index = 0; index < this.state.CovidRecordList.length; index++) {
        const element = array[index];
        
      } */}
    </div>;
    
  }
}
CovidDetails.propTypes = {};

CovidDetails.defaultProps = {
  title : 'Covid Details',
  FirstName: '',
  LastName: '',
  Age: '',
  BodyTemperature: '',
  Covid_Status: ''
};



export default CovidDetails;
