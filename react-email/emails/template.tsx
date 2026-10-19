import {
  Button,
  Html,
  Head,
  Body,
  Container,
  Tailwind,
  Row,
  Column,
  Img,
  Heading,
  Text,
  Link,
  Preview,
  Markdown,
} from "react-email";
import clsx from "clsx";
import { ReactNode } from "react";

interface EmailProps {
  title?: string;
  content?: string;
  phoneNumber?: string;
  previewText?: string;
}

interface LinkProps {
  href: string;
  text?: string;
  img: string;
  alt: string;
}

const previewText = "A brief summary of the email";

const previewContent = `
  Look at this email:

  # Email
  
  This is an important email for the attention of someone. 
  
  The email fully supports the Markdown format, for example lists:
  
  - Point one
  
  - *Bold point*

  - _Italic point_
  
  ## Code

  This can be either inline, for example \`constexpr x = 42;\`, or as a block:

  \`\`\`cpp
  int main() {
      return 0;
  }
  \`\`\`

  I can also include a [link to my website][website], and pictures:

  ![GitHub logo][GitHubLogo]

  ### Quotes

  > To lose is to win, and he who wins shall lose!

  #### Lists

  1. Item one

  2. Another Item

  3. A more complicated item

      1. Subitem A

      2. Subitem B

  4. Item four

  ##### Separators

  ___

  The contents may also be separated using 3 underscores, asterisks, or dashes.

  ###### Summary

  Markdown is handy for emails!

  [website]: https://www.zmwill.uk "My fabulous site"
  [GitHubLogo]: https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/github.png
`;

function LinkRow({ href, text, img, alt }: LinkProps) {
  return (
    <Button
      href={href}
      className={clsx(
        "w-full my-1 text-nowrap text-right text-sm text-purple-white",
      )}
    >
      <Text className="inline-block my-auto py-auto">{text}</Text>
      <Img
        src={img}
        width="12"
        height="12"
        alt={alt}
        className="inline-block px-2 my-auto py-auto"
      />
    </Button>
  );
}

function LinkColumn(props: EmailProps) {
  const phoneNumber = props.phoneNumber ?? "+447900000000";

  return (
    <Column className="min-w-fit m-2 p-2">
      <LinkRow
        href="mailto:z.m.will@icloud.com"
        text="z.m.will@icloud.com"
        img="https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/envelope.png"
        alt="Envelope Icon"
      />
      <LinkRow
        href="https://linkedin.com/in/zmwill"
        text="linkedin.com/in/zmwill"
        img="https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/linkedin.png"
        alt="LinkedIn Logo"
      />

      <LinkRow
        href="https://www.github.com/zwill22"
        text="github.com/zwill22"
        img="https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/github.png"
        alt="GitHub Logo"
      />

      <LinkRow
        href={`tel:${phoneNumber}`}
        text={phoneNumber}
        img="https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/phone.png"
        alt="Phone Icon"
      />

      <LinkRow
        href="https://www.zmwill.uk"
        text="zmwill.uk"
        img="https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/globe.png"
        alt="Internet Globe Icon"
      />
    </Column>
  );
}

function Header(props: EmailProps) {
  return (
    <Container
      className={clsx(
        "w-full rounded-2xl border-white/10 border-2",
        "my-3 mx-auto text-purple-white bg-purple-black",
        "font-serif",
      )}
    >
      <Row>
        {/* <Column>
          <Img
            src="https://raw.githubusercontent.com/zwill22/website/refs/heads/main/public/logo.svg"
            width="170"
            height="179"
            alt="Logo"
          />
        </Column> */}

        <Column className="min-w-fit w-full m-2 p-2">
          <Heading className="m-0 p-0">Zack M Williams PhD</Heading>
          <Text className="m-0 p-0">Scientist</Text>
          <Text className="m-0 p-0">Software Developer</Text>
        </Column>
        <LinkColumn {...props} />
      </Row>
    </Container>
  );
}
function Content(props: EmailProps) {
  const content = props.content ?? previewContent;

  return (
    <Container
      className={clsx(
        "bg-purple-white rounded-xl mx-auto my-6 px-6 w-full min-h-full",
      )}
    >
      <Markdown
        markdownContainerStyles={{ padding: 0 }}
        markdownCustomStyles={{
          h1: {
            marginBlock: 2,
          },
          h2: {
            marginBlock: 2,
          },
          h3: {
            marginBlock: 2,
          },
          h4: {
            marginBlock: 2,
          },
          h5: {
            marginBlock: 2,
          },
          h6: {
            marginBlock: 0,
          },
          p: {
            marginBlock: 2,
          },
        }}
      >
        {content}
      </Markdown>
    </Container>
  );
}

function PicLink({ href, img, alt }: LinkProps) {
  return (
    <Link href={href}>
      <Img src={img} alt={alt} width={16} height={16} />
    </Link>
  );
}

function Footer() {
  const copyright = `${new Date().getFullYear()} Z M Williams`;
  return (
    <Container className="p-2 font-serif">
      <Row className="w-fit" cellSpacing={12}>
        <Column>
          <PicLink
            href="https://www.linkedin.com/in/zmwill"
            img="https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/linkedin.png"
            alt="LinkedIn Logo"
          />
        </Column>
        <Column>
          <PicLink
            href="https://www.github.com/zwill22"
            img="https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/github.png"
            alt="GitHub Logo"
          />
        </Column>
        <Column>
          <PicLink
            href="https://zmwill.uk"
            img="https://raw.githubusercontent.com/zwill22/Signature/refs/heads/main/markdown/globe.png"
            alt="Internet Globe"
          />
        </Column>
        <Column>
          <Text className="block text-purple-white/50 my-auto">
            © {copyright}
          </Text>
        </Column>
      </Row>
    </Container>
  );
}
export default function Email(props: EmailProps): ReactNode {
  const preview = props.previewText ?? previewText;
  return (
    <Html>
      <Head>
        <title>My email title</title>
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                "purple-white": "#f8f2ff",
                "purple-dark": "#190924",
                "purple-black": "#0e0518",
              },
            },
          },
        }}
      >
        <Body className="mx-auto h-screen bg-purple-dark font-sans">
          <Preview>{preview}</Preview>
          <Header {...props} />
          <Content {...props} />
          <Footer />
        </Body>
      </Tailwind>
    </Html>
  );
}
