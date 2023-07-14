export default class ValidateMidFunctions {
  static notFoundKey(requiredKeys: string[], post: any) {

    const keys = requiredKeys.find((key) => !(key in post));
    if (keys) {
      throw new Error(`${keys} is required`)
    }
  }
}