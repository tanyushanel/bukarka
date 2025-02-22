import Subscribe from "components/Subscribe";
import { StyledCommonWrapper } from "styles/CommonStyled";
import { InfoPageWrapper, InfoWrapper, Label, SubscribeWrapper } from "pages/CommonPages.styled";
import {
  AccentText,
  Delivery,
  Description,
  HiddenSubTitle,
  HiddenTitle,
  Line,
  Payment,
  Return,
  ReturnDescription,
  ShiftRight,
  SmallSubTitle,
  SubTitle,
  WarningText,
  WarningTitle,
} from "./DeliveryPage.styled";

const DeliveryPage: React.FC = () => {
  return (
    <StyledCommonWrapper>
      <InfoPageWrapper>
        <Label>Доставка, оплата і повернення</Label>
        <InfoWrapper>
          <HiddenTitle>Умови доставки оплати і повернення</HiddenTitle>
          <AccentText>
            Доставка замовлень на суму 500 грн та вище &mdash; безкоштовна!
          </AccentText>

          <SubTitle>Доставка</SubTitle>
          <HiddenSubTitle>Способи отримання замовлення</HiddenSubTitle>

          <Delivery>
            <li>
              <p>Самовивіз з відділення Укрпошти</p>
            </li>
            <li>
              <p>Самовивіз з відділення Нової Пошти</p>
            </li>
            <li>
              <p>Самовивіз з поштомату Нової Пошти</p>
            </li>
            <li>
              <p>Доставка кур'єром Нової Пошти</p>
            </li>
          </Delivery>

          <Line />

          <SubTitle>Оплата</SubTitle>
          <HiddenSubTitle>
            способи оплати при різних методах доставки
          </HiddenSubTitle>

          <Payment>
            <li>
              <p>Онлайн оплата карткою</p>
            </li>
            <li>
              <p>Післяплата</p>
            </li>
            <li>
              <p>За реквізитами</p>
            </li>
          </Payment>

          <WarningTitle>Зверніть увагу:</WarningTitle>
          <WarningText>
            При доставці у відділення Укрпошти, Нової Пошти та кур’єром Нової
            Пошти вам будуть доступні всі способи оплати.
          </WarningText>
          <WarningText>
            При доставці у поштомат Нової Пошти доступна онлайн оплата карткою.
          </WarningText>

          <Line />

          <SubTitle>Повернення</SubTitle>

          <Description>
            Ми розуміємо, що іноді можуть виникати ситуації, коли вам потрібно
            повернути придбаний товар. У нашому книжковому онлайн магазині ми
            пропонуємо прості та прозорі умови повернення товару, щоб зробити
            цей процес максимально зручним для вас.
          </Description>

          <ShiftRight>
            <SmallSubTitle>Основні умови</SmallSubTitle>
            <Return>
              <li>
                <span>Повернення протягом 14 днів</span>
                <p>
                  Ви маєте право повернути товар в належному вигляді протягом 14
                  днів з моменту його отримання без зазначення причини
                  повернення.
                </p>
              </li>
              <li>
                <span>
                  Товар повинен бути в стані, придатному для повторного продажу:
                </span>
                <p>
                  Для повернення товар повинен бути без пошкоджень та слідів
                  використання.
                </p>
              </li>
              <li>
                <span>Вартість повернення</span>
                <p>
                  Покупець сплачує вартість повернення, якщо причина повернення
                  не пов'язана з дефектами товару.
                </p>
              </li>
            </Return>
          </ShiftRight>
          <ShiftRight>
            <SmallSubTitle>Процес повернення</SmallSubTitle>
            <Return>
              <li>
                <span>Зв'яжіться з нами:</span>
                <p>
                  Перш ніж повертати товар, будь ласка, зв'яжіться з нашим
                  сервісним центром для отримання інструкцій.
                </p>
              </li>
              <li>
                <span>Підготуйте товар:</span>
                <p>
                  Перед відправленням товару нам переконайтеся, що він
                  відповідає умовам повернення.
                </p>
              </li>
              <li>
                <span>Повернення коштів:</span>
                <p>
                  Після отримання та перевірки поверненого товару ми повернемо
                  кошти на рахунок, з якого була здійснена оплата, протягом 3-х
                  банківських днів.
                </p>
              </li>
            </Return>
          </ShiftRight>
          <ReturnDescription>
            Ми цінуємо кожного нашого клієнта і робимо все можливе, щоб
            забезпечити вам приємний досвід покупок у нашому магазині. Якщо у
            вас виникли будь-які питання щодо повернення товару, будь ласка,
            зв'яжіться з нашою службою підтримки, і ми з радістю вам допоможемо.
          </ReturnDescription>
        </InfoWrapper>

        <SubscribeWrapper>
          <Subscribe />
        </SubscribeWrapper>
      </InfoPageWrapper>
    </StyledCommonWrapper>
  );
};

export default DeliveryPage;
