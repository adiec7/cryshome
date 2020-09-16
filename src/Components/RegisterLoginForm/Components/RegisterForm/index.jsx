import * as React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { Icon } from 'react-fa';
import { userActions } from '../../../../Redux/Actions';
import { register, RegisterData, active, ActiveData } from '../../../../Services/Api/User';

class RegisterForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        street: '',
        password: '',
        confirmPassword: '',
      },
      submitted: false,
      verifyCode: '',

      isActiveForm: false,
      isLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.first_name && user.last_name && user.email && user.password) {
      this.props.register(user);
    }
  }

  submitActive = () => {
    const activeData = {
      email: this.state.email,
      verifycode: this.state.verifyCode,
    };
    active(activeData).then((resolveData) => {
      if (resolveData) {
        // todo
      }
    });
  };

  changeFormData = (key, value) => {
    let changeObject = {};
    changeObject[key] = value;
    this.setState(changeObject);
  };

  registerForm() {
    const { registering, alert } = this.props;
    const { user, submitted } = this.state;
    return (
      <form role='form' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <div className='btn-group-justified'>
            <a href='explore.html' className='btn btn-lg btn-facebook'>
              <Icon name='facebook' className='pull-left' />
              <span>Sign In with Facebook</span>
            </a>
          </div>
        </div>
        <div className='form-group'>
          <div className='btn-group-justified'>
            <a href='explore.html' className='btn btn-lg btn-google'>
              <Icon name='google' className='pull-left' />
              <span>Sign In with Google</span>
            </a>
          </div>
        </div>
        <div className='signOr'>OR</div>
        <div className={'form-group' + (submitted && !user.first_name ? ' has-error' : '')}>
          <input
            type='text'
            name='first_name'
            value={user.first_name}
            placeholder='First Name'
            className='form-control'
            onChange={this.handleChange}
          />
          {submitted && !user.first_name && (
            <div className='help-block'>First Name is required</div>
          )}
        </div>
        <div className={'form-group' + (submitted && !user.last_name ? ' has-error' : '')}>
          <input
            type='text'
            name='last_name'
            value={user.last_name}
            placeholder='Last Name'
            className='form-control'
            onChange={this.handleChange}
          />
          {submitted && !user.last_name && <div className='help-block'>Last Name is required</div>}
        </div>
        <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
          <input
            type='text'
            className='form-control'
            name='email'
            placeholder='Email'
            value={user.email}
            onChange={this.handleChange}
          />
          {submitted && !user.email && <div className='help-block'>Email is required</div>}
        </div>

        <div className={'form-group' + (submitted && !user.street ? ' has-error' : '')}>
          <input
            type='text'
            placeholder='Street'
            name='street'
            placeholder='Street'
            className='form-control'
            value={user.street}
            onChange={this.handleChange}
          />
          {submitted && !user.street && <div className='help-block'>Street is required</div>}
        </div>
        <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder='Password'
            value={user.password}
            onChange={this.handleChange}
          />
          {submitted && !user.password && <div className='help-block'>Password is required</div>}
        </div>
        <div
          className={
            'form-group' + (submitted && user.password != user.confirmPassword ? ' has-error' : '')
          }
        >
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            className='form-control'
            value={user.confirmPassword}
            onChange={this.handleChange}
          />
          {submitted && user.password != user.confirmPassword && (
            <div className='help-block'>Password does not match</div>
          )}
        </div>
        <div className='form-group'>
          <div className='btn-group-justified'>
            <button type='submit' className='btn btn-lg btn-green isThemeBtn'>
              Sign Up
            </button>
          </div>
          {registering && (
            <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
          )}
          {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        </div>
        <p className='help-block'>
          <span>Already a Reales member? </span>
          <a
            href='#'
            className='modal-su text-green isThemeText text-red'
            onClick={this.props.openLoginForm}
          >
            Sign In
          </a>
        </p>
      </form>
    );
  }
  activeForm() {
    return (
      <form role='form' onSubmit={this.submitActive}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Verify Code'
            className='form-control'
            value={this.state.verifyCode}
            onChange={(e) => {
              this.changeFormData('verifyCode', e.currentTarget.value);
            }}
          />
        </div>
        <div className='form-group'>
          <div className='btn-group-justified'>
            <button type='submit' className='btn btn-lg btn-green isThemeBtn'>
              Verify
            </button>
          </div>
        </div>
      </form>
    );
  }
  render() {
    return (
      <div className={'registerForm slimScroll modal fade' + (this.props.active ? ' in' : '')}>
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>
                {this.state.isActiveForm ? 'Verify your account' : 'Sign up'}
              </h4>
            </div>
            <div className='modal-body'>
              {this.state.isActiveForm ? this.activeForm() : this.registerForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert, registration } = state;
  const { registering } = registration;
  return { registering, alert };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterForm);

export { connectedRegisterPage as RegisterForm };
