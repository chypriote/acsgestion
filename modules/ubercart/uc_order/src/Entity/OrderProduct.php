<?php

/**
 * @file
 * Contains \Drupal\uc_order\Entity\OrderProduct.
 */

namespace Drupal\uc_order\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\uc_order\OrderProductInterface;

/**
 * Defines the order product entity class.
 *
 * @ContentEntityType(
 *   id = "uc_order_product",
 *   label = @Translation("Order product"),
 *   module = "uc_order",
 *   handlers = {
 *     "storage" = "Drupal\uc_order\OrderProductStorage",
 *     "view_builder" = "Drupal\uc_order\OrderProductViewBuilder",
 *   },
 *   base_table = "uc_order_products",
 *   entity_keys = {
 *     "id" = "order_product_id",
 *   }
 * )
 */
class OrderProduct extends ContentEntityBase implements OrderProductInterface {

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields['order_product_id'] = BaseFieldDefinition::create('integer')
      ->setLabel(t('Order product ID'))
      ->setDescription(t('The ordered product ID.'))
      ->setReadOnly(TRUE)
      ->setSetting('unsigned', TRUE);
    $fields['order_id'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel(t('Order ID'))
      ->setDescription(t('The order ID.'))
      ->setSetting('target_type', 'uc_order')
      ->setSetting('default_value', 0);
    $fields['nid'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel(t('Node ID'))
      ->setDescription('The user that placed the order.')
      ->setSetting('target_type', 'node')
      ->setSetting('default_value', 0);
    $fields['title'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Title'))
      ->setDescription('The product title.')
      ->setSetting('default_value', '');
    $fields['model'] = BaseFieldDefinition::create('string')
      ->setLabel(t('SKU'))
      ->setDescription('The product model/SKU.')
      ->setSetting('default_value', '');
    $fields['qty'] = BaseFieldDefinition::create('integer')
      ->setLabel(t('Quantity'))
      ->setDescription('The number of the product ordered.')
      ->setSetting('default_value', 0)
      ->setSetting('unsigned', TRUE);
    $fields['cost'] = BaseFieldDefinition::create('float')
      ->setLabel(t('Cost'))
      ->setDescription('The cost to the store for the product.')
      ->setSetting('default_value', 0.0);
    $fields['price'] = BaseFieldDefinition::create('float')
      ->setLabel(t('Price'))
      ->setDescription('The price paid for the ordered product.')
      ->setSetting('default_value', 0.0);
    $fields['weight'] = BaseFieldDefinition::create('uc_weight')
      ->setLabel(t('Weight'))
      ->setDescription('The physical weight.');
    $fields['data'] = BaseFieldDefinition::create('map')
      ->setLabel(t('Data'))
      ->setDescription('A serialized array of extra data.');

    return $fields;
  }

}
