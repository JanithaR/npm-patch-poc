# npm-patch-poc

This is a PoC repo that shows how to use [npm-patch](https://www.npmjs.com/package/patch-package)

# Why?

Sometimes we need to make changes to the files in npm dependecies that we use in our projects. For example, quick bug fixes or behavioural changes.

# The problem

But the problem is that changes done to any file inside the **node_module** folder are not retained. Therefore, we have to keep doing the same changes over and over again whenever they are reset.

# The solution

The solution is to use **npm-patch**

# PoC

This example specifically shows how I altered something that I did not like when using [react-native-pincode](https://github.com/jarden-digital/react-native-pincode).

When the number of pincode entries were exhausted a blocked screen appears... rather... painfully... slow. And this is something that was hardcoded in the source. So, how did I alter this?

1.  I found the source file responsible for this painfully slow transition.

> node_modules/@haskkor/react-native-pincode/src/ApplicationLocked.tsx

2.  I altered the code to my liking

> -- timing: { delay: 1000, duration: 1500, ease: easeLinear }

> ++ timing: { delay: 0, duration: 0, ease: easeLinear }

3. I create a **patch** so that I can preserve the changes I did in a **.patch** file

> patch-package @haskkor/react-native-pincode

4. I build **@haskkor/react-native-pincode** so that my project uses it with the changes I did.

> cd node_modules/@haskkor/react-native-pincode && npm run build

# Conclusion

Thankfully, the heavy lifting is already done and all that needs to be done is run 2 scripts I have put in the **package.json** file after doing the required changes to **@haskkor/react-native-pincode**.

> patch-react-native-pincode

> build-react-native-pincode
