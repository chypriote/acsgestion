<?php

/**
 * @file
 * Contains \Drupal\uc_store\Tests\AddressTest.
 */

namespace Drupal\uc_store\Tests;

use Drupal\uc_store\Address;

/**
 * Tests the creation and comparison of addresses.
 *
 * @group Ubercart
 */
class AddressTest extends UbercartTestBase {

  /** Array of Address objects */
  protected $test_address = array();

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    parent::setUp();

    // Create a random address object for use in tests.
    $this->test_address[] = $this->createAddress();

    // Create a specific address object for use in tests.
    $settings = array(
      'first_name'  => 'Elmo',
      'last_name'   => 'Monster',
      'company'     => 'CTW, Inc.',
      'street1'     => '123 Sesame Street',
      'street2'     => '',
      'city'        => 'New York',
      'zone'        => 'NY',
      'country'     => 'US',
      'postal_code' => '10010',
      'phone'       => '1234567890',
      'email'       => 'elmo@ctw.org',
    );
    $this->test_address[] = $this->createAddress($settings);
  }

  public function testAddressFormat() {
    $address = Address::create();
    $address->setCountry(NULL);
    $formatted = (string) $address;
    $expected = '';
    $this->assertEqual($formatted, $expected, 'Formatted empty address is an empty string.');

    $address = $this->test_address[1];

    // Expected format depends on the store country.
    $store_country = \Drupal::config('uc_store.settings')->get('address.country');

    $formatted = (string) $address;
    if ($store_country == 'US') {
      $expected = "CTW, INC.<br>\nELMO MONSTER<br>\n123 SESAME STREET<br>\nNEW YORK, NY 10010";
    }
    else {
      $expected = "CTW, INC.<br>\nELMO MONSTER<br>\n123 SESAME STREET<br>\nNEW YORK, NY 10010<br>\nUNITED STATES";
    }
    $this->assertEqual($formatted, $expected, 'Formatted address matches expected value.');

    $address->city = 'Victoria';
    $address->zone = 'BC';
    $address->country = 'CA';
    $formatted = (string) $address;
    if ($store_country == 'CA') {
      $expected = "CTW, INC.<br>\nELMO MONSTER<br>\n123 SESAME STREET<br>\nVICTORIA BC  10010";
    }
    else {
      $expected = "CTW, INC.<br>\nELMO MONSTER<br>\n123 SESAME STREET<br>\nVICTORIA BC  10010<br>\nCANADA";
    }
    $this->assertEqual($formatted, $expected, 'Formatted address with non-default country matches expected value.');
  }

  public function testAddressComparison() {
    $this->pass((string) $this->test_address[0]);
    $this->pass((string) $this->test_address[1]);

    // Use randomly generated address first.
    $address = clone($this->test_address[0]);

    // Modify phone number and test equality
    $address->phone = 'this is not a valid phone number';
    $this->assertTrue(
      $this->test_address[0]->isSamePhysicalLocation($address),
      'Physical address comparison ignores non-physical fields.'
    );

    // Use specific address.
    $address = clone($this->test_address[1]);

    // Modify city and test equality
    $address->city = 'vIcToRia';
    $this->assertTrue(
      $this->test_address[1]->isSamePhysicalLocation($address),
      'Case-insensitive address comparison works.'
    );

    // Modify city and test equality
    $address->city = '		vic toria ';
    $this->assertTrue(
      $this->test_address[1]->isSamePhysicalLocation($address),
      'Whitespace-insensitive address comparison works.'
    );

  }

  /**
   * Creates an address object based on default settings.
   *
   * @param $settings
   *   An associative array of settings to change from the defaults, keys are
   *   address properties. For example, 'city' => 'London'.
   *
   * @return
   *   Address object.
   */
  protected function createAddress($settings = array()) {
    $street = array_flip(array(
      'Street',
      'Avenue',
      'Place',
      'Way',
      'Road',
      'Boulevard',
      'Court',
    ));

    // Populate any fields that weren't passed in $settings.
    $values = $settings + array(
      'first_name'  => $this->randomMachineName(6),
      'last_name'   => $this->randomMachineName(12),
      'company'     => $this->randomMachineName(10) . ', Inc.',
      'street1'     => mt_rand(10, 1000) . ' ' .
                       $this->randomMachineName(10) . ' ' .
                       array_rand($street),
      'street2'     => 'Suite ' . mt_rand(100, 999),
      'city'        => $this->randomMachineName(10),
      'postal_code' => mt_rand(10000, 99999),
      'phone'       => '(' . mt_rand(100, 999) . ') ' .
                       mt_rand(100, 999) . '-' . mt_rand(0, 9999),
      'email'       => $this->randomMachineName(6) . '@' .
                       $this->randomMachineName(8) . '.com',
    );

    // Set the country if it isn't set already.
    $country_id = array_rand(\Drupal::service('country_manager')->getEnabledList());
    $values += array('country' => $country_id);

    // Don't try to set the zone unless the country has zones!
    $zone_list = \Drupal::service('country_manager')->getZoneList($values['country']);
    if (!empty($zone_list)) {
      $values += array('zone' => array_rand($zone_list));
    }

    // Create object.
    $address = Address::create($values);

    return $address;
  }

}
