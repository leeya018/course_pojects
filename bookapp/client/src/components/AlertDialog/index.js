import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

class AlertDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.updateDialog(false);
    
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.alertDialog === true) {
      this.handleOpen();
    }
  }

  render() {
    let { textDialog, titleDialog, buttonTxt } = this.props;
    const actions = [
      <FlatButton label={buttonTxt} primary={true} keyboardFocused={true} onClick={() => this.handleClose()} />
    ];
    return (
      <div>
        <Dialog
          title={titleDialog}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        {textDialog}
        
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
