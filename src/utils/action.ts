function emptyAction() {
  // 提示当前使用的是空 Action
  console.warn('Current execute action is empty!');
}

class Actions {
  // 默认值为空 Action
  actions: Record<string, any> & {
    onGlobalStateChange: (...args: any) => void;
    setGlobalState: (...args: any) => void;
  } = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  /**
   * 设置 actions
   */
  setActions(actions: any) {
    this.actions = actions;
  }

  getState() {
    return this.actions;
  }

  /**
   * 映射
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onGlobalStateChange(..._agrs: any) {
    return this.actions.onGlobalStateChange(...arguments);
  }

  /**
   * 映射
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setGlobalState(..._args: any) {
    return this.actions.setGlobalState(...arguments);
  }
}

const actions = new Actions();
export { actions };
