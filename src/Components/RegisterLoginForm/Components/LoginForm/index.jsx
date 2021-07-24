import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { userActions } from '../../../../Redux/Actions';
class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      remember: false,
      submitted: false,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }

  toggleRemember = (e) => {
    this.setState({
      remember: e.currentTarget.checked,
    });
  };

  render() {
    const { loggingIn, alert } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div className={'loginForm modal slimScroll fade' + (this.props.active ? ' in' : '')}>
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Sign In</h4>
            </div>
            <div className='modal-body'>
              <form role='loginForm form' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <div className='btn-group-justified'>
                    <div className='btn btn-lg btn-facebook'>
                      <Icon name='facebook' className='pull-left' />
                      <span>Sign In with Facebook</span>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='btn-group-justified'>
                    <div className='btn btn-lg btn-google'>
                      <Icon name='google' className='pull-left' />
                      <span>Sign In with Google</span>
                    </div>
                  </div>
                </div>
                <div className='signOr'>OR</div>
                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                  <input
                    type='text'
                    name='email'
                    value={email}
                    placeholder='Email Address'
                    className='form-control'
                    onChange={this.handleChange}
                  />
                  {submitted && !email && <div className='help-block'>Email is required</div>}
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Password'
                    className='form-control'
                    onChange={this.handleChange}
                  />
                  {submitted && !password && <div className='help-block'>Password is required</div>}
                </div>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-xs-6'>
                      <div className='checkbox custom-checkbox'>
                        <label>
                          <input
                            type='checkbox'
                            checked={this.state.remember}
                            onChange={this.toggleRemember}
                          />
                          <Icon name='check' />
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className='col-xs-6 align-right'>
                      <p className='help-block'>
                        <a href='#' className='text-green isThemeText text-red'>
                          Forgot password?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='btn-group-justified'>
                    <button type='submit' className='btn btn-lg btn-green isThemeBtn btn-red'>
                      Sign In
                    </button>
                  </div>
                  {loggingIn && (
                    <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
                  )}
                  {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
                </div>
                <p className='help-block'>
                  <span>Don't have an account? </span>
                  <a
                    className='modal-su text-green isThemeText text-red'
                    onClick={this.props.openRegisterForm}
                  >
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert, authentication } = state;
  const { loggingIn } = authentication;
  return { loggingIn, alert };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginForm);

export { connectedLoginPage as LoginForm };
