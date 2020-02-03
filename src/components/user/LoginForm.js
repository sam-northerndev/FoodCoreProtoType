/* 
? Generic Login/Registration Component
* Author: Sam Irvine
*/
import React from "react"
import styles from "./LoginForm.module.css"
import classNames from "classnames"
import PropTypes from "prop-types"
// Components
import Card from "../common/Card"
// Utils
import { Spring } from "react-spring/renderprops"

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { complete: this.props.registered ? true : false }
  }

  onSubmitLogin = event => {
    event.preventDefault()
    this.setState({ complete: true }, () => {
      this.props.onRegister()
    })
  }

  render() {
    let planStyle
    // choosing the color for the header based on plan type
    if (this.props.plan === "Ultimate Plan") {
      planStyle = "planThree"
    } else if (this.props.plan === "Standard Plan") {
      planStyle = "planTwo"
    } else {
      planStyle = "planOne"
    }

    const { complete } = this.state
    return complete ? (
      <Spring
        from={{ transform: "translate3d(500px,0px,0)" }}
        to={{ transform: "translate3d(0px,0,0)" }}
      >
        {props => (
          <div style={props}>
            <Card shadow>
              <div className={styles.container}>
                <h2 className={classNames(styles.callToAction, styles.success)}>
                  Success. Please verify your account!
                </h2>
                <p className={styles.description}>
                  In the meantime, you can add, favourite and check items in
                  your list
                </p>
              </div>
            </Card>
          </div>
        )}
      </Spring>
    ) : (
      <Card shadow>
        {this.props.plan && (
          <div className={classNames(planStyle, styles.header)}>
            <h2 className={styles.headerTitle}>{this.props.plan}</h2>
          </div>
        )}
        <div className={styles.container}>
          <p className={styles.callToAction}>
            Want access to all the features provided with FoodCore?
          </p>
          <h2 className={styles.title}>Register</h2>
          {!complete && (
            <form onSubmit={this.onSubmitLogin} className={styles.loginForm}>
              <input
                required
                placeholder={"Email"}
                type="email"
                className={styles.loginInput}
              />
              <input
                required
                placeholder="Password"
                type="password"
                className={styles.loginInput}
              />
              <button
                type="submit"
                className={classNames(styles.submitButton, planStyle)}
              >
                Join
              </button>
            </form>
          )}
        </div>
      </Card>
    )
  }
}

LoginForm.propTypes = {
  onRegister: PropTypes.func,
}

export default LoginForm
