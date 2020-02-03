/* 
? Generic List Component
* Author: Sam Irvine
*/

import React from "react"
import PropTypes from "prop-types"
import styles from "./List.module.css"
import classNames from "classnames"
import { Trail, Spring } from "react-spring/renderprops"

// Icons
import {
  FiEdit2 as Edit,
  FiPlus as Add,
  FiCheck as Check,
  FiHeart as Heart,
  FiInfo as Info,
} from "react-icons/fi"

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.title,
      titleComplete: props.title ? true : false,
      items: props.items,
      item: "",
    }

    this.itemInput = React.createRef()
  }

  onTitleEntry = event => {
    const title = event.target.value
    this.setState({ titleComplete: false, title })
  }

  onEnterTitle = event => {
    // If the user hits enter blur the submission field
    if (event.key === "Enter") {
      event.target.blur()
      this.onTitleComplete()
    }
  }

  onTitleComplete = () => {
    this.setState({ titleComplete: true }, () => {
      this.props.setTitle(this.state.title)
    })
  }

  onItemEntry = event => {
    const item = event.target.value
    this.setState({ item })
  }

  onEnterItem = event => {
    // If the user hits enter blur the submission field
    if (event.key === "Enter") {
      event.target.blur()
    }
  }

  onEnterUpdate = event => {
    if (event.key === "Enter") {
      event.target.blur()
    }
  }

  onItemComplete = () => {
    const { item } = this.state
    if (item) {
      this.props.addItem(item)
      this.setState({ item: "" })
      this.itemInput.current.focus()
    }
  }

  onCheckClick = key => {
    const checks = document.getElementsByName("Check")
    const currentCheck = checks[key].style.color

    if (currentCheck === "green") {
      checks[key].style.color = "rgba(0, 0, 0, 0.73)"
      this.props.onCheck(key, false)
    } else {
      checks[key].style.color = "green"
      this.props.onCheck(key, true)
    }
  }

  onHeartClick = key => {
    const hearts = document.getElementsByName("Heart")
    const currentHeart = hearts[key].style.color

    if (currentHeart === "red") {
      hearts[key].style.color = "rgba(0, 0, 0, 0.73)"
      this.props.onHeart(key, false)
    } else {
      hearts[key].style.color = "red"
      this.props.onHeart(key, true)
    }
  }

  render() {
    const { title, titleComplete, items, item } = this.state

    return (
      <div className={styles.container}>
        <h2 className={styles.description}>Create a list to get started:</h2>
        <div className={styles.outerContainer}>
          {/* This code will handle the title of the list and style updates */}
          <div
            className={classNames(
              styles.titleContainer,
              titleComplete ? styles.titleFinished : styles.titleEdit
            )}
          >
            {!titleComplete && <Edit className={styles.editIcon} />}
            <input
              className={styles.titleInput}
              type="text"
              placeholder="Food List"
              value={title}
              onChange={this.onTitleEntry}
              onBlur={this.onTitleComplete}
              onFocus={this.onTitleEntry}
              onKeyDown={this.onEnterTitle}
            />
          </div>

          {/* This code will handle the list elements*/}
          <Trail
            keys={item => item.key}
            items={items}
            from={{ transform: "translate3d(-200px,0px,0)" }}
            to={{ transform: "translate3d(0,0px,0)" }}
          >
            {item => props => (
              <div className={styles.item} key={item.key} style={props}>
                <input
                  className={styles.itemInput}
                  type="text"
                  value={item.text}
                  onChange={event => {
                    this.props.updateItem(item.key, event.target.value)
                  }}
                  onKeyDown={this.onEnterUpdate}
                />
                <div className={styles.iconContainer}>
                  <Check
                    name="Check"
                    style={{ color: item.check ? "green" : "" }}
                    onClick={
                      this.props.registered
                        ? () => {
                            this.onCheckClick(item.key)
                          }
                        : this.props.featureClick
                    }
                    className={styles.itemIcon}
                  />
                  <Heart
                    name="Heart"
                    style={{ color: item.heart ? "red" : "" }}
                    onClick={
                      this.props.registered
                        ? () => {
                            this.onHeartClick(item.key)
                          }
                        : this.props.featureClick
                    }
                    className={styles.itemIcon}
                  />
                  <Info
                    onClick={this.props.featureClick}
                    className={styles.itemIcon}
                  />
                </div>
              </div>
            )}
          </Trail>

          <div className={styles.addItem}>
            <Add className={styles.editIcon} />
            <input
              ref={this.itemInput}
              className={styles.addItemInput}
              value={item}
              onChange={this.onItemEntry}
              onBlur={this.onItemComplete}
              onKeyDown={this.onEnterItem}
            />
          </div>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  addItem: PropTypes.func,
  updateItem: PropTypes.func,
  onSetTitle: PropTypes.func,
  featureClick: PropTypes.func,
}

List.defaultProps = {
  items: {},
}

export default List
