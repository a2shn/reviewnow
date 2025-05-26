import { routes } from "@/lib/routes";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

interface MagicLinkEmailProps {
  magicLink: string;
}
export default function MagicLinkEmail({ magicLink }: MagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your login code for Linear</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/logo.png`}
            width="42"
            height="42"
            alt="Reviewnow logo"
            style={logo}
          />
          <Heading style={heading}>Your login link for Reviewnow.</Heading>
          <Text style={paragraph}>
            We received a request to log in to your Reviewnow account. Click the
            button below to securely log in.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={magicLink}>
              Login to Reviewnow
            </Button>
          </Section>
          <Text style={paragraph}>
            This link will only be valid for the next 5 minutes.
          </Text>
          <Hr style={hr} />
          <Text style={securityNotice}>
            If you did not request this login, please check your account
            activity immediately or ignore this email.
          </Text>
          <Section style={footerSection}>
            <Text style={footerText}>
              © 2025 Reviewnow App Inc. All rights reserved.
            </Text>
            <Text style={footerText}>
              123 Tech Street, San Francisco, CA 94107
            </Text>
            <Text style={footerText}>
              <Link href={`${baseUrl}/${routes.privacy}`} style={footerLink}>
                Privacy Policy
              </Link>
              {" • "}
              <Link href={`${baseUrl}/${routes.terms}`} style={footerLink}>
                Terms of Service
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
  backgroundColor: "#00000",
  padding: "8px",
  marginBottom: "8px",
};

const main = {
  backgroundColor: "#000000",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "40px 20px 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "28px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#ffffff",
  padding: "20px 0 10px",
  margin: "0",
};

const paragraph = {
  margin: "0 0 24px",
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#e0e0e0",
};

const buttonContainer = {
  padding: "12px 0 24px",
};

const button = {
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  fontWeight: "600",
  color: "#000000",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 24px",
};

const hr = {
  borderColor: "#333333",
  margin: "32px 0 24px",
};

const securityNotice = {
  fontSize: "15px",
  lineHeight: "1.5",
  color: "#cccccc",
  fontStyle: "italic",
  margin: "0 0 32px",
};

const footerSection = {
  textAlign: "center" as const,
  color: "#888888",
  fontSize: "13px",
  lineHeight: "1.5",
};

const footerText = {
  margin: "8px 0",
  color: "#888888",
};

const footerLink = {
  color: "#aaaaaa",
  textDecoration: "underline",
};
