import React, { Component } from 'react';

const withPageTimeTracking = (WrappedComponent) => {
  return class PageTimeTracker extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startTime: new Date(),
        currentTime: new Date(),
      };
    }

    componentDidMount() {
      this.timerInterval = setInterval(() => {
        this.setState({ currentTime: new Date() });
      }, 1000); // Обновлять каждую секунду
    }

    componentWillUnmount() {
      clearInterval(this.timerInterval);
    }

    render() {
      const { startTime, currentTime } = this.state;
      const timeSpent = Math.floor((currentTime - startTime) / 1000); // Время в секундах

      return (
        <div>
          <p>Время на странице: {timeSpent} сек.</p>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withPageTimeTracking;
