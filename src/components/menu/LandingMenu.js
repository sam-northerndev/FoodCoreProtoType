import React from "react"
import styles from "./LandingMenu.module.css"
import classNames from "classnames"
// Components
import List from "../common/List"
import LoginForm from "../user/LoginForm"
import Pricing from "../common/Pricing"
// Utils
import { Spring } from "react-spring/renderprops"

class LandingMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showList: true,
      showPrice: false,
      showRegister: false,
      items: [],
      title: "",
      registered: false,
      plan: "Free Plan",
    }
  }

  onUpdateItems = (key, value) => {
    const { items } = this.state

    items[key].text = value
    this.setState({ items })
  }

  onAddItems = value => {
    const { items, registered } = this.state

    if (registered || items.length < 6) {
      items.push({ key: items.length, text: value })
    } else {
      this.onLoginClick()
    }
  }

  onListClick = () => {
    this.setState({ showList: true, showPrice: false, showRegister: false })
  }

  onPricingClick = () => {
    this.setState({ showList: false, showPrice: true, showRegister: false })
  }

  onLoginClick = () => {
    this.setState({ showList: false, showPrice: false, showRegister: true })
  }

  onSetTitle = title => {
    this.setState({ title })
  }

  onRegister = () => {
    this.setState({ registered: true })
  }

  onHeart = (key, bool) => {
    const { items } = this.state

    items[key].heart = bool
    this.setState({ items })
  }

  onCheck = (key, bool) => {
    const { items } = this.state

    items[key].check = bool
    this.setState({ items })
  }

  onPlanSelect = plan => {
    this.setState({ plan }, () => {
      this.onLoginClick()
      window.scrollTo(0, 500)
    })
  }

  render() {
    const {
      showList,
      showPrice,
      showRegister,
      title,
      items,
      registered,
      plan,
    } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <button
            onClick={this.onPricingClick}
            className={classNames(styles.menuButton, styles.menuLeftButton)}
          >
            Pricing
          </button>
          <button
            onClick={this.onListClick}
            className={classNames(styles.menuButton, styles.menuCenterButton)}
          >
            List
          </button>
          <button
            onClick={this.onLoginClick}
            className={classNames(styles.menuButton, styles.menuRightButton)}
          >
            Register
          </button>
        </div>

        {showList && (
          <Spring
            from={{ transform: "translate3d(0px,500px,0)" }}
            to={{ transform: "translate3d(0px,0,0)" }}
          >
            {props => (
              <div style={props}>
                <List
                  title={title}
                  setTitle={this.onSetTitle}
                  items={items}
                  updateItem={this.onUpdateItems}
                  addItem={this.onAddItems}
                  featureClick={this.onLoginClick}
                  registered={registered}
                  onHeart={this.onHeart}
                  onCheck={this.onCheck}
                />
              </div>
            )}
          </Spring>
        )}

        {showPrice && (
          <Spring
            from={{ transform: "translate3d(-500px,0,0)" }}
            to={{ transform: "translate3d(0px,0,0)" }}
          >
            {props => (
              <div style={props}>
                <Pricing onPlanClick={this.onPlanSelect} />
              </div>
            )}
          </Spring>
        )}

        {showRegister && (
          <Spring
            from={{ transform: "translate3d(500px,0,0)" }}
            to={{ transform: "translate3d(0px,0,0)" }}
          >
            {props => (
              <div style={props}>
                <LoginForm
                  onRegister={this.onRegister}
                  registered={registered}
                  plan={plan}
                />
              </div>
            )}
          </Spring>
        )}
      </div>
    )
  }
}

export default LandingMenu
