import React, { Component } from 'react';
import Product from './../data/product';
import Menubar from './Menubar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {pink50,fullWhite,cyan500} from 'material-ui/styles/colors';
import Slider from 'material-ui/Slider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Chip from 'material-ui/Chip';

injectTapEventPlugin();
const min = 0;
const max = 500;
const power = 5;
function transform(value) {
  return Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);
}
const palette= {
  textColor: fullWhite,
};

const styles = {
  windowheight:{
    height:window.innerHeight-53,
  },
  defaultColor: {
    color: fullWhite,
  },
  underlineStyle:{
    borderColor: pink50,
  },
  input: {
     color: '#fff',
     fontSize: 24,
     lineHeight:1
   },
   hint: {
      color: 'rgba(255, 255, 255, 0.54)',
      fontSize: 24,
      lineHeight:1
    },
   chip: {
    margin:6,
    paddingRight: 6,
    paddingLeft: 6,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const muiTheme = getMuiTheme({
  slider: {
     trackSize: 4,
     trackColor: '#d23d3a',
     trackColorSelected: palette.textColor,
     handleSize: 20,
     handleSizeDisabled: 8,
     handleSizeActive: 25,
     handleColorZero: palette.textColor,
     handleFillColor: palette.textColor,
     selectionColor: palette.textColor,
     rippleColor: palette.textColor,
   },
   chip: {
     backgroundColor: '#4f5dcd',
     textColor: '#fff',
     fontSize: 14,
     shadow: 'none',
   },
});
export default class Search extends Component {

    constructor(props) {
        super(props);
      //  this.state = { searchTerm: '' , results:0 }
        this.state = {firstSlider: 300}
    }

    handleSecondSlider (event, value) {
    this.setState({firstSlider: value});
  }
    render() {
        return (
          <div className="container">
          <Menubar/>
          <div className="search" style={styles.windowheight}>
            <MuiThemeProvider>
              <TextField
                hintText="What you are looking for?"
                id="search-text"
                className="search-input"
                inputStyle={styles.input}
                hintStyle={styles.hint}
                fullWidth={true}
                underlineStyle={styles.defaultColor}
                underlineFocusStyle={styles.underlineStyle}
                />
              </MuiThemeProvider>
              <p className="distance-res">
                <span>{'Search within '}</span>
                <span className="distance-val">{this.state.firstSlider}{'km'}</span>
              </p>
              <MuiThemeProvider muiTheme={muiTheme}>
                <div className="sliderFilter">
                  <Slider
                  min={1}
                  max={500}
                  step={1}
                  sliderStyle={{marginBottom: 20,marginTop: 10}}
                  value={this.state.firstSlider}
                  onChange={this.handleSecondSlider.bind(this)}
                />
        </div>
            </MuiThemeProvider>
            <div className="trends">
              <h4>TRENDING SEARCH</h4>
              <div className="trends" style={styles.wrapper}>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Chip style={styles.chip} labelStyle={{lineHeight:'27px'}}>
                  #samsung
                </Chip>
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Chip style={styles.chip} labelStyle={{lineHeight:'27px'}}>
                  #samsungs8
                </Chip>
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Chip style={styles.chip} labelStyle={{lineHeight:'27px'}}>
                  #s8
                </Chip>
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Chip style={styles.chip} labelStyle={{lineHeight:'27px'}}>
                  #galaxy
                </Chip>
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Chip style={styles.chip} labelStyle={{lineHeight:'27px'}}>
                  #iphone
                </Chip>
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Chip style={styles.chip} labelStyle={{lineHeight:'27px'}}>
                  #iphone7
                </Chip>
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Chip style={styles.chip} labelStyle={{lineHeight:'27px'}}>
                  #iphonered
                </Chip>
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Chip style={styles.chip} labelStyle={{lineHeight:'27px'}}>
                  #apple
                </Chip>
              </MuiThemeProvider>
            </div>
            </div>
          </div>
        </div>
        );
        }
    }
