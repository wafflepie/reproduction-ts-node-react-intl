import { getStateByAction } from "redux-syringe";
import { createStore } from "redux";
import { always } from "ramda";
import { alwaysNull } from "ramda-extension";
import { connect } from "react-redux";
import { Subject } from "rxjs";
import { FormattedMessage } from "react-intl";

console.log(
  getStateByAction,
  createStore,
  always,
  alwaysNull,
  connect,
  Subject,
  FormattedMessage
);
