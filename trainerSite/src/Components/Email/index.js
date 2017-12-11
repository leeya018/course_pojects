import React, {Component} from 'react';
import { Box, Email, Item, Span, renderEmail } from 'react-html-email';

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim();


//3. Create your react component using react-html-email components
const ContactMeTemplate = function() {
  return <Email title="Hello World!" headCSS={css}>
            <Box>
              <Item>
                <Span>"We are gonna get drunk with Russell Crowe and we’re gonna head-butt some godamn kangaroos."</Span>
              </Item>
            </Box>
        </Email>;
};

// 4. Feed your component into react-html-email's renderEmail   
// function, which converts it into the needed html, tables and all.
const Email1 = renderEmail(<ContactMeTemplate />);

export default Email1;
