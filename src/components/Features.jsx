import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { clsx } from 'clsx'

import Card from './Card'
function Feature({ imgUrl, title, description, className, imageWidth }) {
  const isMainImg = imgUrl === 'img/features/Team work-bro.svg'

  return (
    <Card className={className}>
      <div
        className={clsx(
          'tw-relative tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-h-full',
          isMainImg && 'lg:tw-items-start',
        )}
      >
        {!isMainImg ? (
          <div className="tw-flex-1 max-lg:tw-mb-6 tw-text-center">
            <img className="scroll-to-display tw-w-[60%]" style={{ width: imageWidth }} src={useBaseUrl(imgUrl)} />
          </div>
        ) : (
          <img
            className="scroll-to-display lg:tw-absolute lg:tw-right-3 lg:-tw-bottom-20 max-lg:tw-w-[52%] lg:tw-h-[85%] max-lg:tw-mb-6"
            src={useBaseUrl(imgUrl)}
          />
        )}
        <div className="tw-flex-1">
          <div>
            <h3>{title}</h3>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function Features() {
  return (
    <>
      <Feature
        imgUrl="img/features/Team work-bro.svg"
        title={<Translate id="home.features.title">Design for IoT Makers</Translate>}
        description={
          <p>
            <Translate
              id="home.features.desc0"
              values={{
                crd: (
                  <Link
                    className="tw-underline dark:tw-no-underline"
                    to="docs/placeholder"
                  >
                    placeholder docs
                  </Link>
                ),
              }}
            >
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utdo eiusmod tempor incididunt utdo eiusmod tempor incididunt ut'
              }
            </Translate>
          </p>
        }
        className="lg:tw-col-span-2"
      />
      <Feature
        imgUrl="img/features/easy-to-use.svg"
        title={<Translate id="home.features.easytouse">Easy to Use</Translate>}
        description={
          <>
            <p>
              <Translate
                id="home.features.easytouse.desc"
                values={{
                  externallink: (
                    <Link className="tw-underline dark:tw-no-underline" to="https://google.com">
                      Google
                    </Link>
                  ),
                }}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utdo eiusmod tempor incididunt utdo eiusmod tempor incididunt ut{externallink}.'
                }
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="home.features.easytouse.list.1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                </Translate>
              </li>
              <li>
                <Translate id="home.features.easytouse.list.2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-4"
      />
      <Feature
        imgUrl="img/features/flexible-scope.svg"
        title={<Translate id="home.features.flexiblescope">Flexible Scope</Translate>}
        description={
          <>
            <p>
              <Translate id="home.features.flexiblescope.desc.1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.
              </Translate>
            </p>
            <p>
              <Translate id="home.features.flexiblescope.desc.2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.
              </Translate>
            </p>
          </>
        }
        className="lg:tw-col-span-3"
      />
      <Feature
        imgUrl="img/features/security-first.svg"
        title={<Translate id="home.features.securityfirst">Security First</Translate>}
        description={
          <p>
            <Translate id="home.features.securityfirst.desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.
            </Translate>
          </p>
        }
        className="lg:tw-col-span-3"
        imageWidth="75%"
      />
    </>
  )
}
