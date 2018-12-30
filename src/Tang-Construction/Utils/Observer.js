
let subscriptions = {

    'loginUser': []
};

export default {

    events: {
        'loginUser': 'loginUser'
    },
      subscribe: (eventName, fn) => subscriptions[eventName].push(fn),

      trigger: (eventName, data) =>
          subscriptions[eventName].forEach(fn => fn(data))
}