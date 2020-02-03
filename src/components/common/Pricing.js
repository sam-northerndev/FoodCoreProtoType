/* 
? Generic Pricing Component
* Author: Sam Irvine
*/

import React from "react"
import styles from "./Pricing.module.css"
import classNames from "classnames"
import PropTypes from "prop-types"
// Components
import Card from "../common/Card"
import { Spring } from "react-spring/renderprops"

class Pricing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverFree: false,
      hoverStandard: false,
      hoverUltimate: false,
      selectFree: false,
      selectStandard: false,
      selectUltimate: false,
    }
  }

  toggleFree = () => {
    this.setState({ hoverFree: !this.state.hoverFree })
  }

  toggleStandard = () => {
    this.setState({ hoverStandard: !this.state.hoverStandard })
  }

  toggleUltimate = () => {
    this.setState({ hoverUltimate: !this.state.hoverUltimate })
  }

  render() {
    const { hoverFree, hoverStandard, hoverUltimate } = this.state
    return (
      <div className={styles.planContainer}>
        <Spring
          to={{
            transform: hoverFree
              ? "translate3d(0,-50,0)"
              : "translate3d(0px,0px,0)",
          }}
        >
          {props => (
            <div
              className={styles.planHoverContainer}
              style={props}
              onMouseEnter={() => this.toggleFree()}
              onMouseLeave={() => this.toggleFree()}
            >
              <Card className={styles.planCard} shadow>
                <div
                  className={classNames(styles.planTitleContainer, "planOne")}
                >
                  <h2 className={styles.planTitle}>Free Plan</h2>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.price}>$0</h3>
                  <h3 className={styles.planDescription}>
                    Enjoy free-forever access to FoodCore
                  </h3>
                  <div className={styles.planList}>
                    <p>
                      <span role="img" aria-label="List">
                        📃
                      </span>{" "}
                      Private & Shared Lists
                    </p>
                    <p>
                      <span role="img" aria-label="List">
                        🥘
                      </span>{" "}
                      Micro & Macro Nutrient Information
                    </p>
                    <p>
                      <span role="img" aria-label="List">
                        🍴
                      </span>{" "}
                      Recipe Suggestions
                    </p>
                  </div>
                  <button
                    onClick={() => this.props.onPlanClick("Free Plan")}
                    className={classNames(
                      styles.planButton,
                      hoverFree ? "planOne" : ""
                    )}
                  >
                    Select Plan
                  </button>
                </div>
              </Card>
            </div>
          )}
        </Spring>

        <Spring
          to={{
            transform: hoverStandard
              ? "translate3d(0,-50,0)"
              : "translate3d(0px,0px,0)",
          }}
        >
          {props => (
            <div
              className={styles.planHoverContainer}
              style={props}
              onMouseEnter={() => this.toggleStandard()}
              onMouseLeave={() => this.toggleStandard()}
            >
              <Card className={styles.planCard} shadow>
                <div
                  className={classNames(styles.planTitleContainer, "planTwo")}
                >
                  <h2 className={styles.planTitle}>Standard Plan</h2>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.price}>$10</h3>
                  <h3 className={styles.planDescription}>
                    The Most Affordable Way to Own FoodCore
                  </h3>
                  <div className={styles.planList}>
                    <p>
                      <span role="img" aria-label="List">
                        ✅
                      </span>{" "}
                      Everything in the Free Plan
                    </p>
                    <p>
                      <span role="img" aria-label="List">
                        💲
                      </span>{" "}
                      Budget Tracking & Insights
                    </p>
                    <p>
                      <span role="img" aria-label="List">
                        🏋️‍♂️
                      </span>{" "}
                      Diet and Coaching
                    </p>
                  </div>
                  <button
                    onClick={() => this.props.onPlanClick("Standard Plan")}
                    className={classNames(
                      styles.planButton,
                      hoverStandard ? "planTwo" : ""
                    )}
                  >
                    Select Plan
                  </button>
                </div>
              </Card>
            </div>
          )}
        </Spring>

        <Spring
          to={{
            transform: hoverUltimate
              ? "translate3d(0,-50,0)"
              : "translate3d(0px,0px,0)",
          }}
        >
          {props => (
            <div
              className={styles.planHoverContainer}
              style={props}
              onMouseEnter={() => this.toggleUltimate()}
              onMouseLeave={() => this.toggleUltimate()}
            >
              <Card className={styles.planCard} shadow>
                <div
                  className={classNames(styles.planTitleContainer, "planThree")}
                >
                  <h2 className={styles.planTitle}>Ultimate Plan</h2>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.price}>$30</h3>
                  <h3 className={styles.planDescription}>
                    The Best Way to Own FoodCore
                  </h3>
                  <div className={styles.planList}>
                    <p>
                      <span role="img" aria-label="List">
                        ✅
                      </span>{" "}
                      Access to all features
                    </p>
                    <p>
                      <span role="img" aria-label="List">
                        📈
                      </span>{" "}
                      Predictive Analytics & Realtime Budgetting
                    </p>
                    <p>
                      <span role="img" aria-label="List">
                        📺
                      </span>{" "}
                      Video Coaching/Cooking Lessons
                    </p>
                  </div>
                  <button
                    onClick={() => this.props.onPlanClick("Ultimate Plan")}
                    className={classNames(
                      styles.planButton,
                      hoverUltimate ? "planThree" : ""
                    )}
                  >
                    Select Plan
                  </button>
                </div>
              </Card>
            </div>
          )}
        </Spring>
      </div>
    )
  }
}

Pricing.propTypes = {
  onPlanClick: PropTypes.func,
}

export default Pricing
