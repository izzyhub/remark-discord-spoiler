/**
 * @import {Root} from 'mdast'
 */

import { findAndReplace } from "mdast-util-find-and-replace";

/**
 * Turn discord style spoilers into <summary>/<details> tags.
 *
 * @returns
 *   Transform.
 */
export default function remarkDiscordSpoiler() {
  /**
   * @param {Root} tree
   * @return {undefined}
   */
  console.log("called");
  return function (tree) {
    findAndReplace(tree, [
      /\|\|(?:\((?<title>.+)\))?(?<spoiler>.+?)\|\|/gms,

      function (string, title, spoilerText, match) {
        console.log("callback");
        console.log("??????????????");
        console.log(arguments);
        console.log("match: ", match);
        console.log("match.stack: ", match.stack);
        console.log("match.stack[2]: ", match.stack[2]);

        //const title = capture["title"] || "spoiler";
        const titleText = title || "spoiler";
        //const spoilerText = capture;
        console.log("spoilerText");
        if (spoilerText) {
          const node = {
            type: "html",
            value: `
<details class="spoiler">
  <summary class="spoilerTitle">
    ${titleText}
  </summary>
  ${spoilerText}
</details>
`,
          };

          return node;
        } else {
          console.log("return false");
          return false;
        }
      },
    ]);
  };
}
